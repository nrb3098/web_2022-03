package com.suits.pack;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Suit {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private int idSuit;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private Estado estado;

    protected Suit() {}

    public Suit(String name) {
        this.name = name;
        this.estado = Estado.Disponible;
    }

    @Override
    public String toString() {
        return String.format(
                "com.suits.pack.Suit[id=%d, Name='%s', State='%s']",
                idSuit, name, estado);
    }
}
