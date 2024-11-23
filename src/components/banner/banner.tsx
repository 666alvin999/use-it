import Link from "next/link";
import style from "./banner.module.scss";

export default function Banner() {
    return (
        <div className={style.container}>
            <strong>Louez vos chaussures de sport</strong>
            <p>
                Livraison gratuite, échange illimité et sans engagement <Link href="/">En savoir plus</Link>
            </p>
        </div>
    )
}