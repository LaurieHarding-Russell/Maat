package com.moose.maat.assembler;

import org.springframework.stereotype.Component;

import com.moose.maat.model.ClearbitDto;
import com.moose.maat.model.SearchResultDto;

@Component
public class SearchResultAssembler {

	public SearchResultDto toSearchResultDto(ClearbitDto clearbitDto) {
		return new SearchResultDto()
				.setName(clearbitDto.getName())
				.setImagePath(clearbitDto.getLogo());
	}
}
