import cogoToast from "cogo-toast";

class FormHelper {
  IsEmpty(value) {
    return value.length === 0;
  }
  ErrorTost(msg) {
    cogoToast.error(msg, { position: "bottom-center" });
  }
  SuccessTost(msg) {
    cogoToast.success(msg, { position: "bottom-center" });
  }
}

export const { IsEmpty, ErrorTost, SuccessTost } = new FormHelper();
