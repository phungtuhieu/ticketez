package com.ticketez_backend_springboot.modules.mpaaRating;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ticketez_backend_springboot.modules.movie.Movie;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "MPAA_Rating")
@Data
public class MPAARating {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String ratingCode;
	private String icon;
	private String description;

	@JsonIgnore
	@OneToMany(mappedBy = "mpaaRating")
	private List<Movie> movies;

}