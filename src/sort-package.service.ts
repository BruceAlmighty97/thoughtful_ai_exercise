export enum SortPackageType {
    STANDARD = 'STANDARD',
    SPECIAL = 'SPECIAL',
    REJECTED = 'REJECTED',
}

export class SortPackageService {
    private maxWeight = 20; // 20kg
    private maxVolume = 1000000; // 1m^3
    private maxSingleDimension = 150; // 150cm
    constructor() {}

    public sortPackage(
        width: number,
        height: number,
        length: number,
        weight: number
    ): SortPackageType {
        let packageType: SortPackageType;
        const isBulky = this.isBulky(width, height, length);
        const isHeavy = this.isHeavy(weight);
        return this.getClassification(isBulky, isHeavy);
    }

    private getClassification(isBulky: boolean, isHeavy: boolean): SortPackageType {
        let packageType: SortPackageType;
        if (isBulky && isHeavy) {
            packageType = SortPackageType.REJECTED;
        }
        else if (isBulky || isHeavy) {
            packageType = SortPackageType.SPECIAL;
        }
        else {
            packageType = SortPackageType.STANDARD;
        }
        return packageType;
    }

    private isBulky(
        width: number,
        height: number,
        length: number
    ): boolean {
        return (
            width >= this.maxSingleDimension || 
            height >= this.maxSingleDimension || 
            length >= this.maxSingleDimension ||
            width * height * length >= this.maxVolume
        );
    }

    private isHeavy(weight: number): boolean {
        return weight >= this.maxWeight;
    }
    
}