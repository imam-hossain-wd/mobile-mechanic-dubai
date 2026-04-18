import { absSystemRepair } from "./services/absSystemRepair";
import { acRepair } from "./services/acRepair";
import { alternatorRepairService } from "./services/alternatorRepair";
import { batteryreplacement } from "./services/battery-replacement";
import { brakePadRepair } from "./services/brakepadRepair";
import { carAcGasRefill } from "./services/carAcGasRefill";
import { carDetailingDubaiService } from "./services/carDetailingDubaiService";
import { carMaintenanceService } from "./services/carMaintenanceService";
import { carMechanicService } from "./services/carMechanicService";
import { carTransmissionRepairService } from "./services/carTransmissionRepairService";
import { emergencyCarRepairService } from "./services/emergancyCarRepair";
import { fuelPumpRepairService } from "./services/fuelPumpRepair";
import { jumpStartService } from "./services/jumpstartservice";
import { oilChangeService } from "./services/oilChangeService";
import { onsiteCarRepairDubaiService } from "./services/onsiteCarRepairDubaiService";
import { raditorRepair } from "./services/raditorRepair";
import { starterMotorService } from "./services/starterMotorRepair";

export const services = [
    batteryreplacement,
    jumpStartService,
    starterMotorService,

    
    acRepair,
    alternatorRepairService,
    fuelPumpRepairService,
    brakePadRepair,
    emergencyCarRepairService,
    carMechanicService,
    carMaintenanceService,
    carAcGasRefill,
]