package com.moose.maat.core;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.classmate.GenericType;
import com.moose.maat.assembler.SearchResultAssembler;
import com.moose.maat.model.ClearbitDto;
import com.moose.maat.model.SearchResultDto;

@Service
public class SearchService {
	
	@Autowired
	private SearchResultAssembler searchResultAssembler;
	
	private static final String clearbitUri = "https://autocomplete.clearbit.com/v1/companies/suggest?query={company}";
	
	public List<SearchResultDto> getCompanies(String companyName) {
		HttpHeaders headers = new HttpHeaders();
		headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);
		HttpEntity<?> entity = new HttpEntity<>(headers);
		
		RestTemplate restTemplate = new RestTemplate();
		HttpEntity<ClearbitDto[]> response = restTemplate.exchange(clearbitUri, HttpMethod.GET, entity, ClearbitDto[].class, companyName);
		
		
		return Arrays.asList(response.getBody()).stream()
			.map(clearbit -> searchResultAssembler.toSearchResultDto(clearbit))
			.collect(Collectors.toList());
	}
	
}
