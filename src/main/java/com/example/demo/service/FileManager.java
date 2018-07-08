package com.example.demo.service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.channels.Channels;
import java.nio.channels.FileChannel;
import java.nio.channels.ReadableByteChannel;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileManager {
	public void saveFile(String pathStr, MultipartFile multipartFile) throws IOException {
		saveFile(pathStr, multipartFile.getOriginalFilename(), multipartFile.getInputStream(), multipartFile.getSize());
	}
	
	public void saveFile(String pathStr, String fileName, InputStream inputStream, long fileSize) throws IOException {
		Path path = Paths.get(pathStr, fileName);
		if( !Files.exists(path.getParent()) )
			Files.createDirectories( path.getParent() );
		
		FileChannel outputFileChannel = FileChannel.open(path, StandardOpenOption.CREATE, StandardOpenOption.WRITE, StandardOpenOption.TRUNCATE_EXISTING);
		ReadableByteChannel inputChannel = Channels.newChannel(inputStream);
		outputFileChannel.transferFrom(inputChannel, 0, fileSize);
		
		outputFileChannel.close();
		inputChannel.close();
	}
}
