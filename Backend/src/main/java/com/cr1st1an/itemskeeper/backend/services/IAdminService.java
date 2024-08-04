package com.cr1st1an.itemskeeper.backend.services;

import com.cr1st1an.itemskeeper.backend.persistence.entities.User;

public interface IAdminService {
    public String assignRole(String username, String roleName);
    public String removeRole(String username, String roleName);
    public Iterable<User> getUsers();
    public String blockUser(Long userId);
    public String unblockUser(Long userId);
}