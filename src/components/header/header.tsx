import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import Logo from "./logo";
import style from "./header.module.scss";
import Banner from "../banner/banner";

export default function Header() {
    return (
        <header className={style.container}>
            <div className={style.header}>
                <Logo />
                <nav>
                    <Button size="icon" variant="ghost">
                        <Search />
                    </Button>
                    <Button size="icon" variant="ghost">
                        <User />
                    </Button>
                    <Button size="icon" variant="ghost">
                        <ShoppingBag />
                    </Button>
                    <Button size="icon" variant="ghost">
                        <Menu />
                    </Button>
                </nav>
            </div>
            <Banner />
        </header>
    )
}