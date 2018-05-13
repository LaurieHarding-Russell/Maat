package com.moose.maat.assembler;

import com.moose.maat.model.ClearbitDto;
import com.moose.maat.model.SearchResultDto;

public class SearchResultAssembler {

	public SearchResultDto toSearchResultDto(ClearbitDto clearbitDto) {
		return new SearchResultDto()
				.setName(clearbitDto.getName())
				.setImagePath(clearbitDto.getLogo());
	}
}
