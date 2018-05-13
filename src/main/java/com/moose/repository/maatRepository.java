package com.moose.repository;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.moose.maat.model.Company;

@Repository
public class maatRepository {
	
	@Autowired
    private JdbcTemplate jdbcTemplate;
	
	public Company getPeiLocationByPid(UUID id) {
		return jdbcTemplate.queryForObject("SELECT * FROM MAAT.COMPANY WHERE ID = ?", Company.class, id);
	}
}
