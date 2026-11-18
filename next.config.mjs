/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Aucune optimisation : le quota Hobby (5 000 transformations par mois) est
        // partagé par tous les projets du compte, et `hostname: "**"` laissait
        // n'importe qui faire transformer n'importe quelle image du web. Toutes les
        // `<Image>` du site étaient déjà en `unoptimized`.
        unoptimized: true,
    },
    // Ancienne adresse du kit anti-greenwashing, dont le projet Vercel ne faisait
    // plus que rediriger : toute page renvoie à l'accueil, comme avant.
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [{ type: "host", value: "kitantigreenwashing.climatelab.fr" }],
                destination: "https://transitions.climatelab.fr/",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
