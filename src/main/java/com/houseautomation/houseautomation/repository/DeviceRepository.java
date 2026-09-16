package com.houseautomation.houseautomation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.houseautomation.houseautomation.entity.Device;

public interface DeviceRepository extends JpaRepository<Device, Long> {

}