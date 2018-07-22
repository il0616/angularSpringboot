package com.example.demo.model;

import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleBeforeSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.data.rest.core.event.AbstractRepositoryEventListener;
import org.springframework.stereotype.Component;

@RepositoryEventHandler
@Component
public class UserEventHandler {
	@HandleBeforeSave
	public void handleMemberSave(User member) {
		
	}
	
	@HandleAfterDelete
	public void handleMemberDelete(User member) {

	}
	
}
