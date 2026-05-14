/* Please, implement a function accountPatients that takes a count of beds in a hospital and returns an array
of two functions: the first one for adding a patient, the second one for discharging a patient

Initially there are no patients in the hospital. */

/**
 * Manages hospital bed availability using closures.
 * @param {number} totalBeds - Maximum capacity.
 * @returns {Array<Function>} [admitFunction, dischargeFunction]
 */
const accountPatients = (totalBeds) => {
    let currentPatients = 0;

    const admit = () => {
        if (currentPatients < totalBeds) {
            currentPatients++;
            console.log(`A patient was admitted, ${totalBeds - currentPatients} beds are available`);
        } else {
            console.log('Can not admit a patient, no beds available');
        }
    };

    const discharge = () => {
        if (currentPatients > 0) {
            currentPatients--;
            console.log(`A patient was discharged, ${totalBeds - currentPatients} beds are available`);
        } else {
            console.log('There are no patients to discharge');
        }
    };

    return [admit, discharge];
};

const [admitPatient, dischargePatient] = accountPatients(3);

admitPatient();
admitPatient();
admitPatient();
admitPatient(); // Capacity reached
dischargePatient();
dischargePatient();
dischargePatient();
dischargePatient(); // Empty