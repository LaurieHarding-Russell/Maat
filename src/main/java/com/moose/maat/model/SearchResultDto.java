package com.moose.maat.model;

import java.math.BigDecimal;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain=true)
public class SearchResultDto {
	private String name;
	private BigDecimal rating;
	private String description;
	private String imagePath;
	private String routeId;
}
