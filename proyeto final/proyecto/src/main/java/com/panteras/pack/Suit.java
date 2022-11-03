package com.panteras.pack;

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
    @Enumerated(EnumType.STRING)
    private Estado estado;

    protected Suit() {}

    public Suit(String name) {
        this.name = name;
        this.estado = Estado.DISPONIBLE;
    }

    @Override
    public String toString() {
        return String.format(
                "com.panteras.pack.Suit[id=%d, Name='%s', State='%s']",
                idSuit, name, estado);
    }
}
