package com.ticketez_backend_springboot.modules.priceSeatType;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface PriceSeatTypeDAO extends JpaRepository<PriceSeatType, Long> {
    List<PriceSeatType> findByPriceId(Long priceId);
}