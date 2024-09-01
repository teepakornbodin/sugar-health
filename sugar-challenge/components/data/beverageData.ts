export interface BeverageInterface {
    name:string,
    sugarValue:number,
    img:any
}


export const beverageData: BeverageInterface[] = [
    {
        name: "ชาไทย",
        sugarValue: 8,
        img: require('../../assets/images/thaiTea.jpg'),
    },
    {
        name: "ชาเขียว",
        sugarValue: 5,
        img: require('../../assets/images/greenTea.jpg'),
    },
    {
        name: "นมชมพู",
        sugarValue: 11,
        img: require('../../assets/images/pinkMilk.jpg'),
    },
    {
        name: "โอเลี้ยง",
        sugarValue: 12,
        img: require('../../assets/images/O-leng.jpg'),
    },
    {
        name: "ชานม",
        sugarValue: 8,
        img: require('../../assets/images/tea.jpg'), 
    },
    {
        name: "โกโก้",
        sugarValue: 8,
        img: require('../../assets/images/coco.jpg'), 
    },
    {
        name: "โค้ก",
        sugarValue: 8,
        img: require('../../assets/images/coke.jpg'), 
    },
];