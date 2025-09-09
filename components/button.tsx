import {Button} from "@heroui/react";
import Link from "next/link";

export function LoginButton() {
  return  (
    <Link className="text-white cursor-pointer bg-[#2b2b2b] px-4 py-2 rounded hover:bg-slate-700" href="/login">
        Login
    </Link>
  )
}

export default function PrimaryButton() {
  return  (
    <button className="text-white cursor-pointer bg-[#2b2b2b] px-4 py-2 rounded hover:bg-slate-700">
        Login
    </button>
  )
}