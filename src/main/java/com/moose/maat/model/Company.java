package com.moose.maat.model;

import java.util.UUID;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain=true)
public class Company {
	private UUID id;
	private String name;
	private Product products;
}
