package com.ticketez_backend_springboot.modules.showtime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ticketez_backend_springboot.modules.cinemaComplex.CinemaComplex;
import com.ticketez_backend_springboot.modules.format.Format;
import com.ticketez_backend_springboot.modules.movie.Movie;

import java.time.LocalDate;
import java.util.List;

public interface ShowtimeDAO extends JpaRepository<Showtime, Long> {
    @Query("SELECT s FROM Showtime s WHERE s.seatChart.id = :seatChartId")
    List<Showtime> findShowtimesBySeatChartId(@Param("seatChartId") Long seatChartId);

    @Query("SELECT st FROM Showtime st WHERE "
            + "st.cinema.cinemaComplex = :cinemaComplex "
            + "AND st.formatMovie.movie = :movie "
            + "AND st.formatMovie.format = :format "
            + "AND CAST(st.startTime AS DATE) = :date "
            + "AND st.startTime >= CURRENT_TIMESTAMP "
            + "ORDER BY st.startTime")
    List<Showtime> getShowtimesByCCXAndMovieAndFormatAndDate(@Param("cinemaComplex") CinemaComplex cinemaComplex,
            @Param("movie") Movie movie,
            @Param("format") Format format,
            @Param("date") LocalDate date);
    //
}
