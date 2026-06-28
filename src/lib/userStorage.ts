export interface DeliveryData {
  fullName: string;
  phone: string;
  address: string;
}

const USER_STORAGE_KEY = "mercado_digital_user";
const USER_STORAGE_EVENT = "mercado-digital-user-change";
const EMPTY_USER = JSON.stringify({ fullName: "", phone: "", address: "" });

export function subscribeUserData(callback: () => void) {
  window.addEventListener(USER_STORAGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(USER_STORAGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function getUserSnapshot() {
  return localStorage.getItem(USER_STORAGE_KEY) ?? EMPTY_USER;
}

export function getServerUserSnapshot() {
  return EMPTY_USER;
}

export function parseUserData(serialized: string): DeliveryData {
  try {
    const parsed = JSON.parse(serialized) as Partial<DeliveryData>;
    return {
      fullName: parsed.fullName ?? "",
      phone: parsed.phone ?? "",
      address: parsed.address ?? "",
    };
  } catch {
    return { fullName: "", phone: "", address: "" };
  }
}

export function saveUserData(data: DeliveryData) {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data));
  window.dispatchEvent(new Event(USER_STORAGE_EVENT));
}
