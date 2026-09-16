const API_URL = "/api/devices";

let devices = [];


// Load devices from backend
async function loadDevices() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load devices");
        }

        devices = await response.json();

        console.log("Devices from backend:", devices);

        updateDeviceUI();

    } catch (error) {

        console.error("Error loading devices:", error);

    }
}


// Update Light, Fan and AC on screen
function updateDeviceUI() {

    const light = devices.find(
        device => device.name.toLowerCase() === "light"
    );

    const fan = devices.find(
        device => device.name.toLowerCase() === "fan"
    );

    const ac = devices.find(
        device => device.name.toLowerCase() === "ac"
    );


    if (light) {

        document.getElementById("lightStatus").textContent =
            light.status;

        document.getElementById("lightButton").textContent =
            light.status === "ON"
                ? "Turn OFF Light"
                : "Turn ON Light";
    }


    if (fan) {

        document.getElementById("fanStatus").textContent =
            fan.status;

        document.getElementById("fanButton").textContent =
            fan.status === "ON"
                ? "Turn OFF Fan"
                : "Turn ON Fan";
    }


    if (ac) {

        document.getElementById("acStatus").textContent =
            ac.status;

        document.getElementById("acButton").textContent =
            ac.status === "ON"
                ? "Turn OFF AC"
                : "Turn ON AC";
    }
}


// Toggle a device
async function toggleDevice(id) {

    try {

        const response = await fetch(
            `${API_URL}/${id}/toggle`,
            {
                method: "PUT"
            }
        );

        if (!response.ok) {

            throw new Error(
                "Failed to toggle device"
            );

        }

        const updatedDevice = await response.json();

        console.log("Updated device:", updatedDevice);

        // Reload latest database state
        await loadDevices();

    } catch (error) {

        console.error("Toggle error:", error);

    }
}


// Light button
function toggleLight() {

    const light = devices.find(
        device => device.name.toLowerCase() === "light"
    );

    if (light) {

        toggleDevice(light.id);

    } else {

        alert("Light not found in database");

    }
}


// Fan button
function toggleFan() {

    const fan = devices.find(
        device => device.name.toLowerCase() === "fan"
    );

    if (fan) {

        toggleDevice(fan.id);

    } else {

        alert("Fan not found in database");

    }
}


// AC button
function toggleAC() {

    const ac = devices.find(
        device => device.name.toLowerCase() === "ac"
    );

    if (ac) {

        toggleDevice(ac.id);

    } else {

        alert("AC not found in database");

    }
}


// Load devices when page opens
loadDevices();