// export const category: Category[] = [
//         {
//             id: 1,
//             name: "Iphone",
//         },
//         {
//             id: 2,
//             name: "Samsung",
//         },
//         {
//             id: 3,
//             name: "Xiaomi",
//         },
//         {
//             id: 4,
//             name: "Realme",
//         },
//     ]
export interface Category {
    id?: string;
    name?: string;
    label?: string;
    type?: string;
    value?: string | object;
    placeholder?: string;
    required?: boolean;
}