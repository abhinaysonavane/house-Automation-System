package com.houseautomation.houseautomation.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.houseautomation.houseautomation.entity.Device;
import com.houseautomation.houseautomation.service.DeviceService;

@RestController
@RequestMapping("/api/devices")
@CrossOrigin(origins = "*")
public class DeviceController {

    private final DeviceService deviceService;

    public DeviceController(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    @GetMapping
    public List<Device> getAllDevices() {
        return deviceService.getAllDevices();
    }

    @PostMapping
    public Device addDevice(@RequestBody Device device) {
        return deviceService.saveDevice(device);
    }

    @PutMapping("/{id}/toggle")
    public Device toggleDevice(@PathVariable Long id) {
        return deviceService.toggleDevice(id);
    }
}