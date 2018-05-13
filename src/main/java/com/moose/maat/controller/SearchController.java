package com.moose.maat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moose.maat.core.SearchService;
import com.moose.maat.model.SearchResultDto;

@RestController
@RequestMapping("/api/search")
@CrossOrigin(origins = "http://localhost:4200")
public class SearchController {
	
	@Autowired
	private SearchService searchService;

	@GetMapping("/{companyName}")
	public List<SearchResultDto> getCompanies(@PathVariable String companyName) {
		return searchService.getCompanies(companyName);
	}
	
}
