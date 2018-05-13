package com.moose.maat.model;

import java.util.UUID;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain=true)
public class Product {
	private UUID id;
	private String name;
	private String countryOfOrigin;
}
