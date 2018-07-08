package com.example.demo.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.service.FileManager;

@Controller
public class FileUploadController {
	@Autowired
	FileManager fileManager;

	@PostMapping("/import")
	public ResponseEntity<String> importExcelFile(MultipartFile excelFile, String path) throws IOException {
		if( !"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet".equals(excelFile.getContentType()) )
			return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE).body("엑셀 파일만 업로드 하세요.");
		fileManager.saveFile(path, excelFile);
		return ResponseEntity.ok().body(excelFile.getContentType());
	}
}
