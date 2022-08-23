import { useRouter } from "next/router";

const HelloWorld = () =>{
    const router = useRouter();
    const { dynamicRouting } = router.query;
    const aaa = router.query.abc;

    return (
        <div>
            abc입니다.{dynamicRouting} , {aaa}
        </div>
    )
}

export default HelloWorld;