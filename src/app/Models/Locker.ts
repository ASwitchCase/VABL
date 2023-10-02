import { Occupant } from "./Occupant";

export interface Locker {
    lockerId : string,
    occupant : Occupant | undefined
}