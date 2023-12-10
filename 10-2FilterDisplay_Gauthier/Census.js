class Census {

    constructor(tractObj) {
        //JSON: JS Object Notation Slide 15 
        for (let obj in tractObj) {
            this[obj] = tractObj[obj];
        }

        let lonRange = { min: -77.96, max: -77.41 };
        let latRange = { min: 43.33, max: 42.96 };

        //scale remapping
        this.x = map(this.lon, lonRange.min, lonRange.max, 0, width);
        this.y = map(this.lat, latRange.min, latRange.max, height, 0);

        //console.log(this);

        this.toString();
    }


    display() {
        text(this.toString(), this.x, this.y);
    }

    toString() {
        return "population: " + numFormat.num.format(this.population) + "\n" + numFormat.pct.format(this.risks["Sleep <7 hours"]/100) + " sleep <7 hours\n" + numFormat.pct.format(this.disabilities["Hearing Disability"]/100) + " have a hearing disability\n" + numFormat.cur.format(this.medianIncome) + " median income";
    }
}