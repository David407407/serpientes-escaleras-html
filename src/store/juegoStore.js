import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useJuegoStore = create(
    (set, get) => ({
        cartas: [],
        carta: {},
        dado: {},
        animationCard: false,
        setCarta: (carta) => set({carta}),
        setCartas: (cartas) => set({cartas}),
        setDado: (dado) => set({dado}),
        setAnimationCard: (animationCard) => set({animationCard}),
    })
);