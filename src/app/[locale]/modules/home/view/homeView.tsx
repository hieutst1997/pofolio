import { Header } from "../../_common";
// import { useRouter } from 'next/navigation'
const HomeView = ({children}: any) => {
    // const router = useRouter();

    return (
        <div>
            <Header></Header>
            <span>home</span>
        </div>
    )
}

export default HomeView