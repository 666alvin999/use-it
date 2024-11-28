"use client";
import Header from "@/components/header/header";
import { Fragment } from "react";
import style from "./account.module.scss";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CalendarIcon, PackageIcon, RefreshCcwIcon } from "lucide-react";

export default function Account() {
    return (
        <Fragment>
            <Header />
            <main className={style.container}>
                <div className={style.profile}>
                    <Avatar className={style.avatar}>
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className={style.info}>
                        <h1>John Doe</h1>
                        <p>john.doe@gmail.com</p>
                    </div>
                </div>
                <h2 className={style.sectionTitle}>Mes locations</h2>
                <Tabs defaultValue="active" className={style.tabs}>
                    <TabsList className="w-full">
                        <TabsTrigger value="active" className="w-full">En cours</TabsTrigger>
                        <TabsTrigger value="history" className="w-full">Historique</TabsTrigger>
                    </TabsList>

                    <TabsContent value="active" className={style.tabContent}>
                        <div className={style.card}>
                            <div className={style.rentalHeader}>
                                <div className={style.badge}>
                                    <div className={style.dot} />
                                    <span>En location</span>
                                </div>
                                <p className={style.date}>Depuis le 15 mars 2024</p>
                            </div>

                            <div className={style.product}>
                                <div className={style.image}>
                                    <img src="/images/carousel/1.png" alt="Nike Pegasus" />
                                </div>
                                <div className={style.details}>
                                    <h3>Nike Pegasus 41</h3>
                                    <p>Taille: EU 42</p>
                                    <strong>9,99 € / mois</strong>
                                </div>
                            </div>

                            <div className={style.actions}>
                                <Button variant="outline">
                                    <RefreshCcwIcon className="w-4 h-4" />
                                    Demander un échange
                                </Button>
                                <Button variant="outline">
                                    <PackageIcon className="w-4 h-4" />
                                    Suivre mon retour
                                </Button>
                                <Button variant="destructive">
                                    Mettre fin à la location
                                </Button>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="history" className={style.tabContent}>
                        <div className={style.historyList}>
                            <div className={style.card}>
                                <div className={style.historyHeader}>
                                    <div className={style.badge}>
                                        <span>Retournée</span>
                                    </div>
                                    <div className={style.period}>
                                        <CalendarIcon className="w-4 h-4" />
                                        <p>15 jan. - 15 mars 2024</p>
                                    </div>
                                </div>

                                <div className={style.product}>
                                    <div className={style.image}>
                                        <img src="/images/carousel/1.png" alt="Nike Pegasus" />
                                    </div>
                                    <div className={style.details}>
                                        <h3>Nike Pegasus 40</h3>
                                        <p>Taille: EU 42</p>
                                    </div>
                                </div>
                            </div>

                            <div className={style.card}>
                                <div className={style.historyHeader}>
                                    <div className={style.badge}>
                                        <span>Retournée</span>
                                    </div>
                                    <div className={style.period}>
                                        <CalendarIcon className="w-4 h-4" />
                                        <p>15 nov. - 15 jan. 2024</p>
                                    </div>
                                </div>

                                <div className={style.product}>
                                    <div className={style.image}>
                                        <img src="/images/carousel/1.png" alt="Nike Pegasus" />
                                    </div>
                                    <div className={style.details}>
                                        <h3>Nike Pegasus 40</h3>
                                        <p>Taille: EU 42</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </Fragment>
    );
}
