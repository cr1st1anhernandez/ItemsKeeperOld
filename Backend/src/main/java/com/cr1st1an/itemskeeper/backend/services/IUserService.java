package com.cr1st1an.itemskeeper.backend.services;

import com.cr1st1an.itemskeeper.backend.persistence.entities.User;
import com.cr1st1an.itemskeeper.backend.services.models.dtos.UserDTO;

import java.util.Optional;

public interface IUserService {
    public UserDTO getUserById(Long userId);
    public UserDTO updateUser(Long userId, UserDTO userDTO);
    public boolean deleteUser(Long userId);
}
