package com.example.demo.member;

import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleBeforeSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.data.rest.core.event.AbstractRepositoryEventListener;
import org.springframework.stereotype.Component;

@RepositoryEventHandler
@Component
public class MemberEventHandler {
	@HandleBeforeSave
	public void handleMemberSave(Member member) {
		System.out.println(member.remark);
	}
	
	@HandleAfterDelete
	public void handleMemberDelete(Member member) {
		System.out.println("Delete : " + member.remark);
	}
	
}
