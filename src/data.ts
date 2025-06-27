export const initialProducts = [
    {
        id: 1,
        productName: "",
        productType: "",
        roastLevel: "",
        description: "",
        imgUrl: "",

        //Farm and Producer Details
        farm: {
            name: "",
            region: "",
            country: "",
            altitude: "",
            producer: "",
            varietal: "",
            harvestSeason: "",
            farmingPractice: ["", ""],
            story: ""
        },

        // Processing & Roasting
        processingMethod: "",
        roastDate: "",
        roastProfile: "",

        // Tasting and Brewing
        tastingNotes: ["", "", ""],
        brewingRecommendation: ["", "", "", ""],

        // Pricing and Inventory
        weight: [],
        price: [],
        stockQuantity: 0,

    }
]