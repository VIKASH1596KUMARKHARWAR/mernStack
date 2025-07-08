import Admin from "@repo/ui/admin";
import { InputBox } from "@repo/ui/input-box";


export default function () {
    return <div>
        hii from the admin page  while being in the Doc next.js app
        <Admin />
        <InputBox>
            <p>This is some child content inside the InputBox component.</p>
            <button>Click Me</button>
        </InputBox>

    </div>

}