package com.moose.maat.core;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.moose.maat.model.ClearbitDto;
import com.moose.maat.model.SearchResultDto;

@Service
public class SearchService {
	
	public ClearbitDto getCompanies(String companyName) {
		final String clearbitUri = "https://autocomplete.clearbit.com/v1/companies/suggest?query={company}";
		
		HttpHeaders headers = new HttpHeaders();
		headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);
		HttpEntity<?> entity = new HttpEntity<>(headers);
		
		RestTemplate restTemplate = new RestTemplate();
		HttpEntity<ClearbitDto> response = restTemplate.exchange(clearbitUri, HttpMethod.GET, entity, ClearbitDto.class, companyName);
		
		return response.getBody();
	}
	
}
