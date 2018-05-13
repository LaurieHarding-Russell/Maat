package com.moose.maat.model;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain=true)
public class ClearbitDto {
	private String domain;
	private String logo;
	private String name;
}
