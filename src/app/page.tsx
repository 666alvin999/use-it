"use client";
import Header from "@/components/header/header";
import { Fragment, useEffect, useState } from "react";
import style from "./home.module.scss";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CheckIcon, LeafIcon, ClockIcon, RefreshCcwIcon, BanknoteIcon } from "lucide-react";

export default function Home() {
    const [api, setApi] = useState<CarouselApi>()
    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <Fragment>
            <Header />
            <main className={style.container}>
                <div className={style.head}>
                    <div className={style.badge}>
                        <p>JUST USE IT.</p>
                    </div>
                    <h1>Nike Pegasus 41 GORE-TEX</h1>
                    <p>Chaussure de running sur route imperméable</p>
                    <strong>9,99 € par mois</strong>
                </div>
                <Carousel
                    className={style.carousel}
                    setApi={setApi}
                    opts={{
                        loop: true
                    }}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <Image src="/pegasus-41-gore-tex/1.png" alt="Nike Pegasus 41 GORE-TEX" width={500} height={600} />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src="/pegasus-41-gore-tex/2.png" alt="Nike Pegasus 41 GORE-TEX" width={500} height={600} />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src="/pegasus-41-gore-tex/3.png" alt="Nike Pegasus 41 GORE-TEX" width={500} height={600} />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src="/pegasus-41-gore-tex/4.png" alt="Nike Pegasus 41 GORE-TEX" width={500} height={600} />
                        </CarouselItem>
                    </CarouselContent>
                    {api && (
                        <div className={style.pagination}>
                            {Array.from({ length: count }).map((_, index) => (
                                <div key={index} className={cn("w-2 h-2 rounded-full", current === index + 1 ? "bg-black" : "bg-[#CACACB]")} onClick={() => api.scrollTo(index)} />
                            ))}
                        </div>
                    )}
                </Carousel>
                <div className={style.bottom}>
                    <h2>Sélectionner la taille</h2>
                    <ul>
                        <li>EU 39</li>
                        <li>EU 40</li>
                        <li>EU 41</li>
                        <li>EU 42</li>
                        <li>EU 43</li>
                        <li>EU 44</li>
                    </ul>
                    <p className={style.description}>Amorti réactif et rebond à chaque foulée. Cette Pegasus est la chaussure d&apos;hiver idéale pour tes runs par temps humide. Les unités Air Zoom et la semelle intermédiaire en mousse ReactX apportent plus de légèreté et un meilleur retour d&apos;énergie. Empeigne imperméable en GORE-TEX, détails réfléchissants, et surtout beaucoup de confort. Tout ce qu&apos;il te faut pour affronter les éléments.</p>
                    <div className={style.useItProgram}>
                        <div className={style.useItHeader}>
                            <h2>Programme USE IT</h2>
                            <div className={style.useItBadge}>
                                <LeafIcon className="w-3 h-3" />
                                <p>Sans engagement • Éco-responsable</p>
                            </div>
                        </div>
                        <div className={style.useItFeatures}>
                            <div className={style.feature}>
                                <CheckIcon className="w-4 h-4" />
                                <p>Location flexible adaptée à votre rythme</p>
                            </div>
                            <div className={style.feature}>
                                <CheckIcon className="w-4 h-4" />
                                <p>Échange et recyclage des paires usées</p>
                            </div>
                            <div className={style.feature}>
                                <CheckIcon className="w-4 h-4" />
                                <p>Solution durable et sur-mesure</p>
                            </div>
                        </div>

                        <div className={style.steps}>
                            <div className={style.step}>
                                <div className={style.stepNumber}>1</div>
                                <div className={style.stepContent}>
                                    <h3>Choisissez votre paire</h3>
                                    <p>Sélectionnez votre modèle et votre taille. La livraison est gratuite sous 48h.</p>
                                </div>
                            </div>
                            <div className={style.step}>
                                <div className={style.stepNumber}>2</div>
                                <div className={style.stepContent}>
                                    <h3>Profitez de vos runs</h3>
                                    <p>Utilisez vos chaussures aussi longtemps que vous le souhaitez. Location sans engagement.</p>
                                </div>
                            </div>
                            <div className={style.step}>
                                <div className={style.stepNumber}>3</div>
                                <div className={style.stepContent}>
                                    <h3>Échangez quand vous voulez</h3>
                                    <p>Renvoyez gratuitement vos chaussures avec l&apos;étiquette prépayée et recevez une nouvelle paire.</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.infoBox}>
                            <div className={style.info}>
                                <ClockIcon className="w-4 h-4" />
                                <p>Livraison et retour gratuits sous 48h</p>
                            </div>
                            <div className={style.info}>
                                <RefreshCcwIcon className="w-4 h-4" />
                                <p>Échange illimité sans frais supplémentaires</p>
                            </div>
                            <div className={style.info}>
                                <BanknoteIcon className="w-4 h-4" />
                                <p>Prélèvement mensuel automatique</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.ecoFriendly}>
                        <div className={style.ecoHeader}>
                            <h2>Engagement écologique</h2>
                            <div className={style.ecoBadge}>
                                <LeafIcon className="w-3 h-3" />
                                <p>Seconde vie</p>
                            </div>
                        </div>

                        <div className={style.ecoProcess}>
                            <div className={style.ecoStep}>
                                <div className={style.ecoIcon}>
                                    <RefreshCcwIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3>Rénovation complète</h3>
                                    <p>Chaque paire retournée est intégralement rénovée dans nos ateliers français</p>
                                </div>
                            </div>
                            <div className={style.ecoStep}>
                                <div className={style.ecoIcon}>
                                    <LeafIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3>Matériaux recyclés</h3>
                                    <p>Les composants usés sont remplacés par des matériaux recyclés et durables</p>
                                </div>
                            </div>
                            <div className={style.ecoStep}>
                                <div className={style.ecoIcon}>
                                    <CheckIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3>Contrôle qualité</h3>
                                    <p>Chaque paire rénovée passe par un contrôle qualité strict avant d&apos;être remise en circulation</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.ecoStats}>
                            <div className={style.stat}>
                                <strong>-70%</strong>
                                <p>d&apos;impact carbone vs. une paire neuve</p>
                            </div>
                            <div className={style.stat}>
                                <strong>100%</strong>
                                <p>des composants recyclés ou réutilisés</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.actions}>
                    <Button>
                        <p>Louer cette paire</p>
                    </Button>
                </div>
            </main>
        </Fragment>
    );
}
