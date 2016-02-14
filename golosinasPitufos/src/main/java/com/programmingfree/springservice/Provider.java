package com.programmingfree.springservice;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Id;

@Entity
@Table(name="providers")
public class Provider {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="provider_id")
    private int id;

    @Column(name="provider_name")
    private String providerName;

    @Column(name="provider_address")
    private String providerAddress;

    @Column(name="provider_phone")
    private String providerPhone;

    @Column(name="provider_archived")
    private int providerArchived = 0;

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    public String getProviderAddress() {
        return providerAddress;
    }

    public void setProviderAddress(String providerAddress) {
        this.providerAddress = providerAddress;
    }

    public String getProviderPhone() {
        return providerPhone;
    }

    public void setProviderPhone(String providerPhone) {
        this.providerPhone = providerPhone;
    }

    public int getProviderArchived() {
        return providerArchived;
    }

    public void setProviderArchived(int providerArchived) {
        this.providerArchived = providerArchived;
    }

    @Override
    public String toString() {
        return "Provider [id=" + id + ", providerName=" + providerName
                + ", providerAddress=" + providerAddress + ", providerPhone="
                + providerPhone + "]";
    }

}

