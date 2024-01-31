import Link from "next/link";
import { Text, Code } from "@radix-ui/themes";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Link href="/">
        <div className="flex items-center gap-2">
          <MonduIcon className="h-6 w-6" />
          <Text weight="medium">Mondu Demo App</Text>
        </div>
      </Link>
      <nav className="flex gap-6">
        <Link href="/">
          <Text>Home</Text>
        </Link>
        <Link href="/checkout">
          <Text>Checkout</Text>
        </Link>
        <Link href="/orders">
          <Text>Orders</Text>
        </Link>
        <Link href="/webhooks">
          <Text>Webhooks</Text>
        </Link>
        <Link href="https://github.com/hreinberger">
          <Text>
            <Code>Github Repo</Code>
          </Text>
        </Link>
      </nav>
    </header>
  );
}

function MonduIcon(props) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="400" fill="#7A3BE8" />
      <path
        d="M201.644 88.8889C141.036 88.8889 96.2961 135.74 96.2961 199.783C96.2961 264.239 141.027 311.111 201.644 311.111C262.675 311.111 307.407 264.26 307.407 199.783C307.407 135.74 262.675 88.8889 201.644 88.8889ZM254.006 220.685C253.915 225.682 252.293 230.522 249.372 234.516C246.451 238.51 242.379 241.456 237.736 242.933L152.353 271.664C152.049 271.766 151.727 271.793 151.411 271.742C151.096 271.691 150.797 271.565 150.538 271.372C150.28 271.179 150.07 270.926 149.925 270.634C149.78 270.341 149.704 270.018 149.704 269.69V179.249C149.792 174.251 151.413 169.41 154.334 165.415C157.256 161.421 161.33 158.476 165.975 157.003L251.367 128.297C251.671 128.194 251.993 128.168 252.309 128.218C252.624 128.269 252.924 128.396 253.182 128.589C253.441 128.782 253.651 129.035 253.796 129.328C253.941 129.62 254.016 129.944 254.016 130.273L254.006 220.685Z"
        fill="white"
      />
    </svg>
  );
}