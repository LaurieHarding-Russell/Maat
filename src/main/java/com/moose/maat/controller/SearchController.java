package com.moose.maat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moose.maat.core.SearchService;
import com.moose.maat.model.SearchResultDto;

@RestController
@RequestMapping("/api/search")
public class SearchController {
	
	@Autowired
	private SearchService searchService;

	public List<SearchResultDto> getCompanies(String companyName) {
		return searchService.getCompanies(companyName);
	}
	
}
