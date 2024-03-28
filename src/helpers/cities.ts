import { api } from "@waslaeuftin/trpc/server";
import { Cinemas } from "@waslaeuftin/types/Movie";

export const Cities: Record<
  string,
  {
    name: string;
    fetchMoviesOfToday: () => ReturnType<typeof api.movies.getMovies>;
    fetchMovies: () => ReturnType<typeof api.movies.getMovies>;
  }
> = {
  karlsruhe: {
    name: "Karlsruhe",
    fetchMoviesOfToday: async () => {
      const date = new Date();

      return (
        await Promise.all([
          api.movies.getMovies({ cinema: Cinemas.zkm_karlsruhe, date }),
          api.movies.getMovies({
            cinema: Cinemas.karlsruhe_kinemathek,
            date,
          }),
          api.movies.getMovies({ cinema: Cinemas.karlsruhe_schauburg, date }),
          api.movies.getMovies({ cinema: Cinemas.universum_karlsruhe, date }),
        ])
      ).flat();
    },
    fetchMovies: async () => {
      return (
        await Promise.all([
          api.movies.getMovies({ cinema: Cinemas.zkm_karlsruhe }),
          api.movies.getMovies({ cinema: Cinemas.karlsruhe_kinemathek }),
          api.movies.getMovies({ cinema: Cinemas.karlsruhe_schauburg }),
          api.movies.getMovies({ cinema: Cinemas.universum_karlsruhe }),
        ])
      ).flat();
    },
  },
  "karlsruhe-rastatt": {
    name: "Karlsruhe & Rastatt",
    fetchMoviesOfToday: async () => {
      const date = new Date();

      return (
        await Promise.all([
          api.movies.getMovies({ cinema: Cinemas.zkm_karlsruhe, date }),
          api.movies.getMovies({
            cinema: Cinemas.karlsruhe_kinemathek,
            date,
          }),
          api.movies.getMovies({ cinema: Cinemas.karlsruhe_schauburg, date }),
          api.movies.getMovies({ cinema: Cinemas.forum_rastatt, date }),
          api.movies.getMovies({ cinema: Cinemas.universum_karlsruhe, date }),
        ])
      ).flat();
    },
    fetchMovies: async () => {
      return (
        await Promise.all([
          api.movies.getMovies({ cinema: Cinemas.zkm_karlsruhe }),
          api.movies.getMovies({ cinema: Cinemas.karlsruhe_kinemathek }),
          api.movies.getMovies({ cinema: Cinemas.karlsruhe_schauburg }),
          api.movies.getMovies({ cinema: Cinemas.forum_rastatt }),
          api.movies.getMovies({ cinema: Cinemas.universum_karlsruhe }),
        ])
      ).flat();
    },
  },
  rastatt: {
    name: "Rastatt",
    fetchMoviesOfToday: async () => {
      const date = new Date();

      return (
        await Promise.all([
          api.movies.getMovies({ cinema: Cinemas.forum_rastatt, date }),
        ])
      ).flat();
    },
    fetchMovies: async () => {
      return (
        await Promise.all([
          api.movies.getMovies({ cinema: Cinemas.forum_rastatt }),
        ])
      ).flat();
    },
  },
  leonberg: {
    name: "Leonberg",
    fetchMoviesOfToday: async () => {
      const date = new Date();

      return await api.movies.getMovies({
        cinema: Cinemas.traumpalast_leonberg,
        date,
      });
    },
    fetchMovies: async () => {
      return (
        await Promise.all([
          api.movies.getMovies({ cinema: Cinemas.traumpalast_leonberg }),
        ])
      ).flat();
    },
  },
  offenburg: {
    name: "Offenburg",
    fetchMoviesOfToday: async () => {
      const date = new Date();

      return await api.movies.getMovies({
        cinema: Cinemas.forum_offenburg,
        date,
      });
    },
    fetchMovies: async () => {
      return await api.movies.getMovies({ cinema: Cinemas.forum_offenburg });
    },
  },
  lahr: {
    name: "Lahr",
    fetchMoviesOfToday: async () => {
      const date = new Date();

      return await api.movies.getMovies({
        cinema: Cinemas.forum_lahr,
        date,
      });
    },
    fetchMovies: async () => {
      return await api.movies.getMovies({ cinema: Cinemas.forum_lahr });
    },
  },
};
