import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BASE_PATH = process.env.NODE_ENV === "production" ? "/revit-house-plans" : "";
const asset = (p: string) => `${BASE_PATH}${p}`;

export const metadata: Metadata = {
  title: "Projets — Timotei Blindu · Dessinateur en construction",
  description:
    "Sélection de projets de dessinateur en construction : plans, coupes, élévations, fondations sur Revit & AutoCAD.",
};

const projects = [
  {
    slug: "projet-franciuc",
    title: "Projet Franciuc",
    location: "Bosanci, Roumanie",
    type: "Maison unifamiliale",
    cover: "plan-A101-1.png",
    summary: "9 planches A1 — implantation, niveaux, coupes, élévations et fondations. Revit + AutoCAD.",
    tags: ["Revit", "AutoCAD", "Plans complets", "Collab"],
  },
];

export default function ProjetsPage() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">T</div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">Timotei Blindu</div>
              <div className="text-xs text-muted-foreground">Dessinateur · Aide construction</div>
            </div>
          </Link>
          <Button asChild variant="ghost" size="sm" className="gap-1.5">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" /> Accueil
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="border-b border-border/60 bg-gradient-to-b from-accent/40 to-background py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Badge variant="secondary" className="mb-4">Projets</Badge>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Sélection de réalisations
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Travaux d&apos;études et collaborations en dessin technique du bâtiment. Plans 2D,
              coupes, élévations, fondations — produits sur Revit et AutoCAD.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <Link key={p.slug} href={`/projets/${p.slug}/`} className="group block">
                  <Card className="h-full overflow-hidden transition hover:border-primary/50 hover:shadow-lg">
                    <div className="relative aspect-[4/3] overflow-hidden bg-white">
                      <Image
                        src={asset(`/portfolio/${p.cover}`)}
                        alt={p.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="mb-2 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <Badge key={t} variant="secondary" className="text-[10px] font-medium">{t}</Badge>
                        ))}
                      </div>
                      <h2 className="text-lg font-semibold tracking-tight">{p.title}</h2>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {p.type} · {p.location}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                        Voir le projet
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-muted/40 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Timotei Blindu — Bruxelles
        </div>
      </footer>
    </>
  );
}
