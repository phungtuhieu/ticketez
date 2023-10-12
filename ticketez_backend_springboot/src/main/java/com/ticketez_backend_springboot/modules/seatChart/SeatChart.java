package com.ticketez_backend_springboot.modules.seatChart;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ticketez_backend_springboot.modules.cinema.Cinema;
import com.ticketez_backend_springboot.modules.priceService.PriceService;
import com.ticketez_backend_springboot.modules.seat.Seat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "seatchart")
@Data
public class SeatChart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Integer rows;
    private Integer columns;
    private Boolean status;
    @ManyToOne
    @JoinColumn(name = "cinema_id")
    private Cinema cinema;

    @JsonIgnore
    @OneToMany(mappedBy = "seatChart")
    private List<Seat> Seats;
}