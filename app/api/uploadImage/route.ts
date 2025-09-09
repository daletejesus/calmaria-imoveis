
import { NextResponse } from 'next/server';
import { v2 } from 'cloudinary';
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { 
            id, base64
        } = body as {
            id: string, 
            base64: string[],
        };

        console.log("Os valores recebidos pela api: " + id, base64)

        v2.config({ 
            cloud_name: 'dmmytzy6a', 
            api_key: '745293134635372', 
            api_secret: 'rF8i46NPGwI74ouMsJE-CZdvOzM' // Click 'View API Keys' above to copy your API secret
        });
        
        // Upload an image
        let uploadResult

        for (let i = 0; i < base64.length; i++) {
            uploadResult = await v2.uploader.upload(
                base64[i], {
                    folder: 'imoveis',
                    public_id: id + '_' + i, // Nome do arquivo como id_0, id_1, etc.
                }
            ).catch((error) => {
                console.log(error);
            });

            
            if (uploadResult) {
                const imagem = await prisma.imagem.create({
                    data: {
                        url: uploadResult.url,
                        imovelId: id,
                    },
                });
            }
        }

        return NextResponse.json({ uploadResult },{ status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "deu erro :(" },{ status: 500 });
    }
}