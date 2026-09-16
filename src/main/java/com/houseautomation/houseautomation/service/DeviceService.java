package com.houseautomation.houseautomation.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.houseautomation.houseautomation.entity.Device;
import com.houseautomation.houseautomation.repository.DeviceRepository;

@Service
public class DeviceService {

    private final DeviceRepository deviceRepository;

    public DeviceService(DeviceRepository deviceRepository) {
        this.deviceRepository = deviceRepository;
    }

    public List<Device> getAllDevices() {
        return deviceRepository.findAll();
    }

    public Device saveDevice(Device device) {
        return deviceRepository.save(device);
    }

    public Device toggleDevice(Long id) {

        Device device = deviceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Device not found"));

        if (device.getStatus().equalsIgnoreCase("ON")) {
            device.setStatus("OFF");
        } else {
            device.setStatus("ON");
        }

        return deviceRepository.save(device);
    }
}