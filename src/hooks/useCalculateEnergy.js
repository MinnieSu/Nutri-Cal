// check mifflin equation? result super low for female
import { useState } from "react";
import useUserStore from "../store/userStore";
import useShowToast from "./useShowToast";

const useCalculateEnergy = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useUserStore((state) => state.setUser);
  const showToast = useShowToast();
  const calculateEnergy = (inputs) => {
    if (!inputs.gender || !inputs.age || !inputs.weight || !inputs.height) {
      showToast("Error", "Please fill all fields", "error");
      return;
    }
    setIsLoading(true);

    try {
      let HBdata,
        mifflinData,
        IOMdata,
        BMIdata,
        simpleCalData,
        IBWdata,
        ABWdata,
        healthyWeightLowerRange,
        healthyWeightHigherRange,
        energyReqtData;

      // Harris-Benedict, Mifflin, IOM calculation
      if (inputs.gender == "male") {
        HBdata = (
          (13.75 * inputs.weight + 5 * inputs.height * 100 - 6.75 * inputs.age + 66) *
          inputs.PAL
        ).toFixed();
        mifflinData = (
          (10 * inputs.weight + 6.25 * inputs.height * 100 - 5 * inputs.age + 5) *
          inputs.PAL
        ).toFixed();
        IOMdata = (
          662 -
          9.53 * inputs.age +
          inputs.PAL * (15.91 * inputs.weight + 539.6 * inputs.height)
        ).toFixed();
      }
      if (inputs.gender == "female") {
        HBdata = (
          (13.75 * inputs.weight + 5 * inputs.height * 100 - 6.75 * inputs.age + 66) *
          inputs.PAL
        ).toFixed();
        mifflinData = (
          (10 * inputs.weight + 6.25 * inputs.height * 100 - 5 * inputs.age - 161) *
          inputs.PAL
        ).toFixed();
        IOMdata = (
          354 -
          6.91 * inputs.age +
          inputs.PAL * (9.36 * inputs.weight + 726 * inputs.height)
        ).toFixed();
      }

      //   BMI
      BMIdata = (inputs.weight / inputs.height ** 2).toFixed(1);

      //   Simple Calculation
      if (inputs.BMI < 18.5) {
        simpleCalData = (35 * inputs.weight).toFixed();
      }
      if (inputs.BMI > 18.5 && inputs.BMI < 24.9) {
        simpleCalData = (30 * inputs.weight).toFixed();
      }
      if (inputs.BMI > 24.9) {
        simpleCalData = (25 * inputs.weight).toFixed();
      }

      //   Ideal body weight
      IBWdata = (inputs.height ** 2 * ((18.5 + 24.9) / 2)).toFixed(1);

      // Healthy weight range
      healthyWeightLowerRange = (inputs.height ** 2 * 18.5).toFixed(1);
      healthyWeightHigherRange = (inputs.height ** 2 * 24.9).toFixed(1);

      // Adjusted body weight
      if (inputs.BMI > 27) {
        ABWdata = (inputs.weight - IBWdata) * 0.25 + IBWdata;
      }

      //   Energy requirement
      energyReqtData = mifflinData;

      localStorage.setItem(
        "user-info",
        JSON.stringify({
          ...inputs,
          HB: HBdata,
          Mifflin: mifflinData,
          IOM: IOMdata,
          BMI: BMIdata,
          simpleCal: simpleCalData,
          IBW: IBWdata,
          ABW: ABWdata,
          healthyWeight: [healthyWeightLowerRange, healthyWeightHigherRange],
          energyReqt: mifflinData,
        })
      );
      setUser({
        ...inputs,
        HB: HBdata,
        Mifflin: mifflinData,
        IOM: IOMdata,
        BMI: BMIdata,
        simpleCal: simpleCalData,
        IBW: IBWdata,
        ABW: ABWdata,
        healthyWeight: [healthyWeightLowerRange, healthyWeightHigherRange],
        energyReqt: mifflinData,
      });
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsLoading(false);
      showToast("Success", "calculation done!", "success");
    }
  };
  return { isLoading, calculateEnergy };
};

export default useCalculateEnergy;

// if accquiring userStore instead of passing inputs, add this as the first line of calculateEnergy function: const userStore = useUserStore.getState().user;
